import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs"

//this is custom intecepter do exactly same as ClassSerializerInterceptor in App.module
export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler) {

        console.log("THIS IS INTECEPTING THE REQUEST")
        console.log({ context })

        return handler.handle().pipe(
            map((data) => {
                const response = {
                    ...data,
                    createdAt: data.created_at
                }
                delete response.updated_at
                delete response.created_at
                // console.log("THIS IS INTECEPTING THE RESPONSE");
                // console.log({ data })
                return response;
            })
        )
    }
}