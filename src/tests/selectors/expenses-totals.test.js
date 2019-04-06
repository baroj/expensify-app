import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'


  test('should 0 for single expense', () => {
    const emptyExp = [];
    const result = selectExpensesTotal(emptyExp);
    expect(result).toEqual(0);
  });
  

  test('should single expense value 195', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toEqual(195);
  });
  
  test('should return total 114195', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(114195);
  });
  