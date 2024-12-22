export class ResponseHelper {
    static createErrorResponse(
      status: number,
      message: string,
      field?: string,
      suggestion?: string,
    ): { error: { status: number; message: string; field?: string; suggestion?: string } } {
      return {
        error: {
          status,
          message,
          ...(field && { field }), 
          ...(suggestion && { suggestion }),
        },
      };
    }
  }
  