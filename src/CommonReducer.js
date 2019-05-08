/*
    The commonReducer function combines multiple reducers into a single function and asks each of them
    to handle actions. Reducers return new objects when they modify the contents of the data store, which
    makes it easy to detect when an action has been handled.

    A higher-order reducer is a function that takes a reducer function as an argument, and/or returns a new reducer function as a result.
    It can also be viewed as a "reducer factory". We can use this pattern to create specialized versions of our own reducer functions, with each version only responding to specific actions.
*
* */
export const CommonReducer = (...reducers)  =>  (storeData, action) => {

    console.log( reducers );

    for( let i = 0; i < reducers.length; i = i + 1 ) {
        let newStore = reducers[i](storeData, action);
        console.log( newStore);
        if (newStore !== storeData) {
            return newStore;
        }
    }
    return storeData;
};
