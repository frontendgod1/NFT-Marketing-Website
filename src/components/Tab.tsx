import Box from "./common/Box";

const Tab = ({
  tab,
  id,
  activeTab,
  setActiveTab,
}: {
  tab: string;
  id: number;
  activeTab: number;
  setActiveTab: (id: number) => void;
}) => {
  return (
    <div onClick={() => setActiveTab(id)}>
      <Box
        cssClasses={[
          "tab",
          "bg-2",
          "border-gradient",
          "border-gradient-1",
          "w-auto",
          "border-r-10",
          "mx-3",
          `${id === activeTab ? "active" : ""}`,
        ]}
      >
        {tab}
      </Box>
    </div>
  );
};

export default Tab;
