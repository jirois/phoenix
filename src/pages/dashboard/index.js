import React from "react";
import { HeaderOne } from "../../components/Styles";
import {
  CartIcon,
  DashboardHeader,
  DashboardItem,
  DashboardItemContainer,
  MoneyIcon,
  SummaryBody,
  SummaryTitleOne,
  SummaryTitleThree,
  SummaryTitleTwo,
  UserIcon,
} from "./dashboardElements";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader>
        <HeaderOne>Dashboard</HeaderOne>
      </DashboardHeader>
      <>
        <DashboardItemContainer>
          <DashboardItem>
            <SummaryTitleOne>
              <span>
                <UserIcon />
                Users
              </span>
            </SummaryTitleOne>
            <SummaryBody>56</SummaryBody>
          </DashboardItem>
          <DashboardItem>
            <SummaryTitleTwo>
              <span>
                <CartIcon /> Orders
              </span>
            </SummaryTitleTwo>
            <SummaryBody>11</SummaryBody>
          </DashboardItem>
          <DashboardItem>
            <SummaryTitleThree>
              <span>
                <MoneyIcon />
                Sales
              </span>
            </SummaryTitleThree>
            <SummaryBody>$1233</SummaryBody>
          </DashboardItem>
        </DashboardItemContainer>
        <div>
          <div>
            <h2>Sales</h2>
          </div>
        </div>
        <div>
          <h2>Categories</h2>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
