// export const checkIsLink = (link) => {
//     const pattern = new RegExp(
//         "^(https?:\\/\\/)?" + // protocol
//             "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
//             "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
//             "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
//             "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
//             "(\\#[-a-z\\d_]*)?$",
//         "i"
//     ); // fragment locator
//     return !!pattern.test(link);
// };

// export const checkIsLink = (link) => link;

const pattern = new RegExp("^.+\\..+");
export const checkIsLink = (link) => !!pattern.test(link);

export default checkIsLink;
