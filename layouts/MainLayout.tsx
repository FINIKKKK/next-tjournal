import React from "react";
import clsx from "clsx";
import { LeftMenu } from "../components/LeftMenu";
import { SideComments } from "../components/SideComments";

interface MainLayoutProps {
  children?: any;
  hideComments?: boolean;
  hideSidebar?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideSidebar,
  className,
}) => {
  return (
    <div className={clsx("wrapper", className)}>
      {!hideSidebar && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}
      <div className={clsx("content", { "content--full": contentFullWidth })}>
        {children}
      </div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
