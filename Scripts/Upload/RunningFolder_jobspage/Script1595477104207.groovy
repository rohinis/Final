import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys
import org.openqa.selenium.WebDriver
import org.openqa.selenium.remote.RemoteWebDriver
import org.openqa.selenium.support.events.EventFiringWebDriver

import com.kms.katalon.core.exception.StepErrorException
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.driver.DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.relevantcodes.extentreports.LogStatus
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration

import internal.GlobalVariable as GlobalVariable

WebDriver driver = DriverFactory.getWebDriver()
EventFiringWebDriver eventFiring = ((DriverFactory.getWebDriver()) as EventFiringWebDriver)
WebDriver wrappedWebDriver = eventFiring.getWrappedDriver()
RemoteWebDriver katalonWebDriver = ((wrappedWebDriver) as RemoteWebDriver)
//====================================================================================
ReportFile = (GlobalVariable.G_ReportName + '.html')
def extent = CustomKeywords.'generateReports.GenerateReport.create'(ReportFile, GlobalVariable.G_Browser, GlobalVariable.G_BrowserVersion)
def LogStatus = com.relevantcodes.extentreports.LogStatus
def extentTest = extent.startTest(TestCaseName)
CustomKeywords.'toLogin.ForLogin.Login'(extentTest)
//=====================================================================================

println "*****************************************************"
println GlobalVariable.G_Platform
println "*****************************************************"

def navLocation = CustomKeywords.'generateFilePath.filePath.execLocation'()
def location = (navLocation + '/JobsModule/')
println "*****************************************************"
println location
println "*****************************************************"


TestObject newFileObj

try
{
	WebUI.delay(2)
	WebUI.click(findTestObject('GenericObjects/TitleLink_Jobs'))
	extentTest.log(LogStatus.PASS, 'Click on Jobs tab')
	WebUI.delay(2)
	WebUI.click(findTestObject('Object Repository/JobMonitoringPage/a_Reset'))
	extentTest.log(LogStatus.PASS, 'Click on reset')

	TestObject newJobFilter = WebUI.modifyObjectProperty(findTestObject('JobMonitoringPage/label_jobState'), 'text', 'equals',
			jobState, true)

	WebUI.click(newJobFilter)

	WebUI.delay(2)
	extentTest.log(LogStatus.PASS, 'Clicked on job with state  - ' + jobState)

	println jobState
	TestObject newJobRow = WebUI.modifyObjectProperty(findTestObject('JobMonitoringPage/div_Completed'), 'title', 'equals',	jobState, true)
		WebUI.rightClick(newJobRow)
		
		
	
	WebUI.click(findTestObject('JobMonitoringPage/ViewDetails_Jobs'))
	extentTest.log(LogStatus.PASS, 'Clicked on job with state  - ' + jobState)

   //WebUI.waitForElementVisible(findTestObject('JobMonitoringPage/OutputFolder_File'), 5)
	//WebUI.click(findTestObject('JobMonitoringPage/OutputFolder_File'))
	WebUI.click(findTestObject('JobMonitoringPage/RunningFolder'))
	extentTest.log(LogStatus.PASS, 'Click on Running Folder')
	
	
    
	
	def filePathFT = (RunConfiguration.getProjectDir() + '/Upload/') + ToUpload
	def newFPFT=CustomKeywords.'generateFilePath.filePath.getFilePath'(filePathFT)
	println(newFPFT)
	
	WebUI.uploadFile(findTestObject('2020.1/UploadFile'), newFPFT )
	extentTest.log(LogStatus.PASS, 'Uploading zip file - JobsModule.zip')
	WebUI.delay(5)
	WebUI.click(findTestObject('Object Repository/FilesPage/button_Yes'))
	extentTest.log(LogStatus.PASS, 'Clicked YES on Unzip on Upload confirmation pop-up')
	WebUI.delay(2)
		
		
		
		
		if (GlobalVariable.G_Browser == 'Edge') {
		WebUI.callTestCase(findTestCase('Generic/Logout'), [:], FailureHandling.STOP_ON_FAILURE)
	}

}

catch (Exception  ex)
{

	String screenShotPath='ExtentReports/'+TestCaseName+GlobalVariable.G_Browser+'.png'
	WebUI.takeScreenshot(screenShotPath)
	extentTest.log(LogStatus.FAIL,ex)
	KeywordUtil.markFailed('ERROR: '+ e)

}
catch (StepErrorException  e)
{

	String screenShotPath='ExtentReports/'+TestCaseName+GlobalVariable.G_Browser+'.png'
	WebUI.takeScreenshot(screenShotPath)
	extentTest.log(LogStatus.FAIL,e)
	KeywordUtil.markFailed('ERROR: '+ e)

}
finally
{

	extent.endTest(extentTest);
	extent.flush();

}

