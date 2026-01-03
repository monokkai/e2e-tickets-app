/** @type {import('prettier').Config} */
export default {
    trailingComma: "es5",
    tabWidth: 4,
    useTabs: true,
    semi: false,
    singleQuote: false,
    jsxSingleQuote: false,
    arrowParens: "avoid",
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    importOrderParserPlugins: [
        "classProperties",
        "decorators-legacy",
        "typescript",
    ],
    importOrder: [
        "<THIRD_PARTY_MODULES>",
        "^@core/(.*)$",
        "^../(.*)",
        "^./(.*)",
    ],
    plugins: ["@trivago/prettier-plugin-sort-imports"],
}
