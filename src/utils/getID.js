/**
 * Transforms a regular string into something more of
 * a "snake-cased" string to be used as element ID.
 * Not exclusively though, it could be used for more stuff.
 * @param {String} str - A string to transform into ID format
 * @returns a formated string to be used as element ID
 * @example
 * ```
 * const str = 'What the f*ck? Is this real, modern & nice?'
 * console.log(getID(str))
 * // Prints: What-the-fck-Is-this-real-modern-nice
 * // Noice! 🤙🏼
 * ```
 */
export const getID = (str) => {
    try {
        return str
            .replace(/[^a-zA-Z0-9 ]/g, '')  //--> Remove special chars
            .replace(/[ ]+/g, '-')          //--> Replace spaces with a dash
            .toLowerCase()                  //--> Enforce lower casing
    } catch (e) {
        return 'noValidId'
    }
}
