/*
*   You can define action creators and reducers for different parts of the application in the same file, but
*   breaking them into separate files can make development easier.
* */

export const DataTypes = {
    PRODUCTS: "products",
    CATEGORIES: "categories"
};

export const ActionTypes = {
    DATA_LOAD: "data_load",
    CART_ADD: "cart_add",
    CART_UPDATE: "cart_update",
    CART_REMOVE: "cart_delete",
    CART_CLEAR: "cart_clear"
};
