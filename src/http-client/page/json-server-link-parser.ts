import { HttpResponse } from "@angular/common/http"
import { ResponseParserFunction } from "./page.service"

const pageIdRegex: RegExp = /page=([0-9]*).*(last|next)/

export const jsonServerLinkParser: ResponseParserFunction = (response: HttpResponse<any>) => {
    const split = response.headers
        .get('link')!
        .split(", ")

    const linkMap = new Map<string, number>()

    split.forEach(
        line => {
            let match = line.match(pageIdRegex)
            if (match) {
                linkMap.set(match[2], Number(match[1]))
            }
        }
    )

    const lastPage = linkMap.get('last')
    const nextPage = linkMap.get('next')

    const currentPage = nextPage ? nextPage - 1 : lastPage

    return {
        curentPage: currentPage!,
        lastPage: lastPage!,
        pageSize: 10,
    }
}