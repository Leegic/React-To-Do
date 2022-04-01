import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Learn as much coding as possible, due date 6/1/2024',
            completed: false
        },
        {
            id: 2,
            text: 'Do an hour or more of coding, Due Everyday!',
            completed: false
        },
        {
            id: 3,
            text: 'Figure out what to do for Vacation before 5/18/22',
            completed: false
        },
        {
            id: 4,
            text: 'Lose 10 pounds or more by 5/18/22',
            completed: false
        },
        {
            id: 5,
            text: 'Get rid of LC Fomo by 3/10/22',
            completed: false
        },
        {
            id: 6,
            text: 'Streaming Detox by 3/10/22',
            completed: false
        },

        
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
