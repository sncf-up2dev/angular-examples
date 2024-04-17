import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http"
import { IS_LOGGING_ENABLED } from "../context-token"

export const interceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  if (req.context.get(IS_LOGGING_ENABLED)) {
    console.log(req)
  }
  return next(req)
}
