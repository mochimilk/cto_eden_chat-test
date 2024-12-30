import * as React from "react";
import {
  Body1Strong,
  Button,
  Caption1Strong,
  Menu,
  MenuTrigger,
  ToolbarButton,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { Dismiss20Regular, MoreHorizontalRegular } from "@fluentui/react-icons";

// Reusable component for a chat history item
const ChatHistoryItem: React.FC<{ text: string }> = ({ text }) => (
  <button className="chatHistoryItem">
    <span className="chatHistoryItemTitle">{text}</span>
    <span className="chatHistoryItemDismiss">
      <Dismiss20Regular />
    </span>
  </button>
);

// Reusable component for a chat history section
const ChatHistorySection: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div>
    <Caption1Strong
      style={{ padding: "8px", color: "var(--colorNeutralForeground4)" }}
    >
      {title}
    </Caption1Strong>
    {items.map((item, index) => (
      <ChatHistoryItem key={index} text={item} />
    ))}
    <br />
    <br />
  </div>
);

const PanelLeft: React.FC = () => {
  // Chat history data
  const chatSections = [
    {
      title: "Today",
      items: [
        "Publish react repo github",
        "Conditional panel toggles",
        "Typescript errors",
      ],
    },
    {
      title: "Previous 7 Days",
      items: [
        "Installing dependencies",
        "Fluent React v9",
        "Custom hooks",
        "Hotkey function",
        "React template setup guide",
        "Basics of CSS",
        "Getting started with React",
        "Distance from Earth to the Moon",
        "Can dogs eat pumpkin?",
        "Deploying with GH pages",
        "Developing for the environment",
      ],
    },
    {
      title: "Previous 30 Days",
      items: [
        "AI trends",
        "Design trends",
        "tina cms for jekyll",
        "Ruby Rails inquiry",
        "Jekyll npm",
        "Installing dependencies",
        "Fluent React v9",
      ],
    },
  ];

  return (
    <div className="panelLeft">
      <div className="panelHeader">
        <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
          Chat History
        </Body1Strong>
        <Menu>
          <MenuTrigger>
            <ToolbarButton aria-label="More" icon={<MoreHorizontalRegular />} />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Clear History</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <div className="chatHistoryContainer">
        {chatSections.map((section, index) => (
          <ChatHistorySection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default PanelLeft;
