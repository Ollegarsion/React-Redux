import _ from 'lodash'

export const currenciesSelector = state => {
    return state.currencies.reversed ?  _.reverse(_.clone(state.currencies.data)) : _.clone(state.currencies.data)
}

//export const studentsReversedSelector = state => _.reverse(state.students.data) || []
export const isFetchingSelector = state => state.currencies.dataFetching
