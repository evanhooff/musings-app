import { NextRequest, NextResponse } from 'next/server';

const IMMICH_API_KEY = process.env.IMMICH_API_KEY || '';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Get the encoded Immich URL from the client
    const encodedUrl = searchParams.get('url');
    if (!encodedUrl) {
      return NextResponse.json(
        { error: 'Missing URL parameter' },
        { status: 400 }
      );
    }
    
    // Decode the URL and add the API key
    const baseUrl = decodeURIComponent(encodedUrl);
    const immichUrl = `${baseUrl}&apiKey=${IMMICH_API_KEY}`;
    
    console.log(`[IMMICH PROXY] Fetching: ${immichUrl.replace(IMMICH_API_KEY, '[REDACTED]')}`);
    
    const response = await fetch(immichUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'NextJS-Immich-Proxy/1.0',
      },
      // Add timeout
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      console.error(`[IMMICH PROXY] Error: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: 'Image not found' },
        { status: response.status }
      );
    }

    // Get the image data
    const imageBuffer = await response.arrayBuffer();
    const originalContentType = response.headers.get('content-type');
    
    // Handle different image formats properly
    let contentType = originalContentType;
    if (!contentType || !contentType.startsWith('image/')) {
      contentType = 'image/jpeg'; // Safe fallback
    }

    console.log(`[IMMICH PROXY] Success: ${Math.round(imageBuffer.byteLength / 1024)}KB, type: ${contentType}`);

    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, immutable', // Cache for 24 hours
        'Content-Length': imageBuffer.byteLength.toString(),
        'Accept-Ranges': 'bytes', // Allow partial requests for better performance
      },
    });

  } catch (error) {
    console.error('[IMMICH PROXY] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    );
  }
}