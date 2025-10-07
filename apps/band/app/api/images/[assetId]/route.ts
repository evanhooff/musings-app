import { NextRequest, NextResponse } from 'next/server';

const IMMICH_BASE_URL = process.env.IMMICH_BASE_URL || '';
const IMMICH_API_KEY = process.env.IMMICH_API_KEY || '';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ assetId: string }> }
) {
  try {
    // Await params in Next.js 15
    const { assetId } = await params;
    const searchParams = request.nextUrl.searchParams;
    const size = searchParams.get('size') || 'thumbnail';
    
    const immichUrl = `${IMMICH_BASE_URL}/assets/${assetId}/thumbnail?size=${size}&apiKey=${IMMICH_API_KEY}`;
    
    const response = await fetch(immichUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'NextJS-Immich-Proxy/1.0',
      },
      // Add timeout
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      console.error(`[IMMICH IMAGE] Error: ${response.status} ${response.statusText}`);
      // Return a placeholder or error image
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
      // If no content type or not an image type, try to determine from the response
      contentType = 'image/jpeg'; // Safe fallback
      
      // You could add more sophisticated detection here if needed
      // For example, checking magic bytes of the image
    }

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
    console.error('[IMMICH IMAGE] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500 }
    );
  }
}
