import React from "react";
import "../App.css";
import "./css/Chat.css";
import {
  Body1Strong,
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Title3,
  Body1,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  DesignIdeas20Filled,
  Code20Filled,
  Flowchart20Filled,
  SendRegular,
  ArrowResetRegular,
  ComposeRegular,
  AttachRegular,
  AppsRegular,
} from "@fluentui/react-icons";
import {
  PanelLeftContract,
  PanelLeftExpand,
  PanelRightContract,
  PanelRightExpand,
  Search,
} from "../bundleIcons.tsx";
import { useContentHooks } from "../Hooks/useContentHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render right toggle
}

const Content: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

  return (
    <div className="contentContainer">
      {/*📌 Below is the setup for the content toolbar.
       ***You may remove this if your app doesn't need a toolbar. */}

      <div className="panelHeader">
        <div className="headerTitleGroup">
          {togglePanel && ( // Hide left toggle if togglePanel is not provided
            <Tooltip content={`${commandKey} + ←`} relationship="label">
              <Button
                icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
                onClick={togglePanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
        </div>

        <Toolbar style={{ width: "100%" }}>
          <ToolbarDivider />

          <Button appearance="subtle" icon={<ComposeRegular />}>
            New Chat
          </Button>
        </Toolbar>

        <Toolbar>
          <ToolbarButton icon={<Search />} />
          <Menu>
            <MenuTrigger>
              <ToolbarButton
                aria-label="More"
                icon={<MoreHorizontalRegular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>New </MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem disabled>Open File</MenuItem>
                <MenuItem>Open Folder</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          {toggleRightPanel && ( // Hide right toggle if toggleRightPanel is not provided
            <Tooltip content={`${commandKey} + →`} relationship="label">
              <ToolbarButton
                icon={
                  isRightPanelOpen ? (
                    <PanelRightContract />
                  ) : (
                    <PanelRightExpand />
                  )
                }
                onClick={toggleRightPanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
        </Toolbar>
      </div>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Dependencies for .md files and react-markdown are preinstalled.
       ***Don't forget call your import above!
       ***/}

      <div className="content">
        {/* Chat */}
        <div className="chatContainer">
          <div className="chatField">
            <Title3>What's your role?</Title3>
            <div className="promptButtonContainer">
              <div className="promptButton">
                {/* <DesignIdeas20Filled /> */}
                <h2 style={{lineHeight: '0%'}}>🧑🏽‍🎨</h2>
                <Body1Strong>Designer</Body1Strong>
                <Body1 style={{ color: "var(--colorNeutralForeground4" }}>
                  {" "}
                  Help me find a document from last week.
                </Body1>
              </div>

              <div className="promptButton">
                {/* <Code20Filled /> */}
                <h2 style={{lineHeight: '0%'}}>👩🏻‍💻</h2>
                <Body1Strong>Developer</Body1Strong>
                <Body1 style={{ color: "var(--colorNeutralForeground4" }}>
                  {" "}
                  Help me find a document from last week.
                </Body1>
              </div>

              <div className="promptButton">
                {/* <Flowchart20Filled /> */}
                <h2 style={{lineHeight: '0%'}}>👩🏼‍💼</h2>
                <Body1Strong>Product Manager</Body1Strong>
                <Body1 style={{ color: "var(--colorNeutralForeground4" }}>
                  {" "}
                  Help me find a document from last week.
                </Body1>
              </div>
            </div>
            <Body1 style={{ color: "var(--colorNeutralForeground4)" }}>
              AI generated content may be incorrect.{" "}
              <span>
                <a href="">Learn more</a>
              </span>
            </Body1>
          </div>
          <div className="chatInputContainer">
            <input
              className="chatInput"
              placeholder="Ask me anything..."
            ></input>
            <div className="chatTools">
              <div>
              <Button appearance="subtle" icon={<AttachRegular />}></Button>
              <Button appearance="subtle" icon={<AppsRegular />}></Button>
              </div>
             
              <Button appearance="subtle" icon={<SendRegular />}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
