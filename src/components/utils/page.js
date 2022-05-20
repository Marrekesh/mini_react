export const getPage = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}