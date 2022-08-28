import styled from "styled-components";
import { FaMoneyBill, FaShoppingCart, FaUser } from "react-icons/fa";
import { color } from "../../components/Styles";

export const DashboardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const DashboardItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;

export const DashboardItem = styled.li`
    border: 0.1rem solid; #c0c0c0;
    margin: 2rem;
    border-radius: 0.5rem;
    flex: 1 1 20rem;
`;

export const SummaryTitle = styled.div`
  font-size: 2rem;
  padding: 1rem;
`;
export const SummaryTitleOne = styled(SummaryTitle)`
  background-color: #f0e0e0;
`;
export const SummaryTitleTwo = styled(SummaryTitle)`
  background-color: #e0f0e0;
`;
export const SummaryTitleThree = styled(SummaryTitle)`
  background-color: #e0e0f0;
`;
export const SummaryBody = styled.div`
  font-size: 4rem;
  padding: 1rem;
  text-align: center;
`;

export const CartIcon = styled(FaShoppingCart)`
  margin-left: 0.2rem;
  fill: ${color.primary};
  font-size: 1.8rem;
`;
export const UserIcon = styled(FaUser)`
  margin-left: 0.2rem;
  fill: ${color.darkGrey};
`;
export const MoneyIcon = styled(FaMoneyBill)`
  margin-left: 0.4rem;
  fill: ${color.primary};
`;
