import MasterLayout from "../layout/MasterLayout";
import Expense from "../components/Expense";

const ExpensePage = () => {
  return (
    <MasterLayout>
      <h1>Expense Page</h1>
      <Expense />
    </MasterLayout>
  );
};

export default ExpensePage;
