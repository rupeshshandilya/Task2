import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { useData } from "./DataProvider";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const { state } = useData();
  const [currentTab, setCurrentTab] = useState(0);
  
   const handleTabChange = (index: number) => {
    // To update the state of the current tab
     setCurrentTab(index);
   };
  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs isLazy index={currentTab} onChange={handleTabChange}>
          <TabList>
            <CustomTab isDisabled={false}>Requisition Details</CustomTab>
            <CustomTab isDisabled={state.jobDetails.jobTitle.length > 1 ? false : true}>Job Details</CustomTab>
            <CustomTab isDisabled={state.interviewSettings.interviewLanguage.length > 1 ? false : true}>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm handleTabChange={handleTabChange} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm handleTabChange={handleTabChange} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm handleTabChange={handleTabChange} />
              </TabPanel>
            </TabPanels>
            <DisplayCard />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
