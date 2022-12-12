<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>FileModule</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>9790dda7-c5bf-4832-9c5b-5d6139d533f2</testSuiteGuid>
   <testCaseLink>
      <guid>35c6e4b8-35af-4402-ae99-76a4db7f4a9b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/ProfileModule/PreReq/Pre-Req-Script-FileOps</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>ee8c6b5b-4cd6-4f2f-a3ea-9d5457cde594</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>9e02443f-7bc7-4a60-a9ca-7dea0ebfdc7e</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>7538c095-2322-4ac9-9852-966b674b04da</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/FilesModule/ContextMenu_CreateFile</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>343f04f1-0bfc-4a3f-a7eb-18897ba908b7</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>5-8</value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForCreateFile</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>343f04f1-0bfc-4a3f-a7eb-18897ba908b7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FileName</value>
         <variableId>a3756e78-bbe4-48a0-a4d5-6ec6bd47bc77</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>343f04f1-0bfc-4a3f-a7eb-18897ba908b7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>2e498ee0-1e20-4b3b-9d60-6205daa1c0bb</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>343f04f1-0bfc-4a3f-a7eb-18897ba908b7</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>userChoice</value>
         <variableId>bfcee239-bd9a-4fca-98de-44045bb08518</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>d419ec4d-36d8-4310-b05d-cd3110505979</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/FilesModule/Create_file</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>96894f36-b3bc-4170-bc1e-231f3e4d975f</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-4</value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForCreateFile</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>96894f36-b3bc-4170-bc1e-231f3e4d975f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FileName</value>
         <variableId>fbbf9b51-72f4-495f-9cbf-a8e08f06ebf3</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>96894f36-b3bc-4170-bc1e-231f3e4d975f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>02884025-536f-4943-85bd-c1e5dc201c49</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>96894f36-b3bc-4170-bc1e-231f3e4d975f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>userChoice</value>
         <variableId>cdf52790-8a83-4b10-8c0b-bed0a592b1c4</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2d01540e-c9e5-441b-aa7e-e253bc3caeb5</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/FilesModule/FileOperations</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3c6c79d6-6c5b-4880-b0da-a9b8c5131c9f</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForFileOperations</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>3c6c79d6-6c5b-4880-b0da-a9b8c5131c9f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FileName</value>
         <variableId>9db2c348-847f-41f0-800b-d8b322772339</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3c6c79d6-6c5b-4880-b0da-a9b8c5131c9f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>1d7255ee-2b97-45de-860a-6d4dff97674d</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>3c6c79d6-6c5b-4880-b0da-a9b8c5131c9f</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Operation</value>
         <variableId>7b950ced-8cb3-43ce-a472-81090d4db7f5</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>2f618e12-9205-4d65-92ed-ab15083087af</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/FilesModule/FileOperations _Topmenu_Icons</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>20e94f01-cbb9-4df9-97ba-bca831f912a1</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-14</value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForFileOperations</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>20e94f01-cbb9-4df9-97ba-bca831f912a1</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FileName</value>
         <variableId>fef0a116-14fc-4f5d-9698-dc91f7dc6011</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>20e94f01-cbb9-4df9-97ba-bca831f912a1</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>d8e11563-2a37-4cb2-93bb-34d05ea7171c</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>20e94f01-cbb9-4df9-97ba-bca831f912a1</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>IconOperation</value>
         <variableId>48764322-b43e-4cf8-a125-8a2f6a070349</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>0218eb96-e682-4713-a940-8b32a71df4f1</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/FilesModule/FileViewerOperations</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>8353c2d7-499a-4fe9-9029-49aedffc2ede</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForFileViewer</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>8353c2d7-499a-4fe9-9029-49aedffc2ede</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FileName</value>
         <variableId>9fa70e0e-ddc5-443f-82cf-74e6dc308317</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8353c2d7-499a-4fe9-9029-49aedffc2ede</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>17636c94-acfa-452d-9ca9-44c1c14edb87</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8353c2d7-499a-4fe9-9029-49aedffc2ede</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Operation</value>
         <variableId>6ea28048-2fa4-4154-aa63-89368e7a9aae</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>ef1274aa-47d9-4785-b26a-d28851f1ff02</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>c224f674-e547-485c-856c-7ecb4248da75</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/FilesModule/BookMarkOperations</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>da6f5dd8-b094-4106-91ea-49763fc6fde9</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForBookMarks</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>da6f5dd8-b094-4106-91ea-49763fc6fde9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>bookMarkName</value>
         <variableId>4d935674-32e0-4d9c-a5a2-02a91f2765ff</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>da6f5dd8-b094-4106-91ea-49763fc6fde9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>8ff2041d-3d7f-420a-873c-e1626bf9061a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>da6f5dd8-b094-4106-91ea-49763fc6fde9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>option</value>
         <variableId>20621fd8-78a3-4263-9aec-8e5f976aee20</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>da6f5dd8-b094-4106-91ea-49763fc6fde9</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>location</value>
         <variableId>555f7fb9-d8cc-4ef2-9bfe-3a93d5c9060a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>c7d5b966-c3fb-4077-8987-6079bf79f6af</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>1a6c3a9d-3649-4f20-b590-f44e2807874f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/FilesModule/FileViewerOperations - DoubleClick</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>bd2f2c0c-a674-4467-815f-5bef8323db15</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Regression/TestDataForFileViewer</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>bd2f2c0c-a674-4467-815f-5bef8323db15</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FileName</value>
         <variableId>c844dc4e-3e34-41cd-90d8-618ca926e74b</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>bd2f2c0c-a674-4467-815f-5bef8323db15</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>21ef2d4e-945f-458f-a400-c8c60c014f44</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>bd2f2c0c-a674-4467-815f-5bef8323db15</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Operation</value>
         <variableId>83943d6f-538b-46d7-bf1e-03311d71e13e</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
