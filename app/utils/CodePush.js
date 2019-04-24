import codePush from 'react-native-code-push'
import Router from '../router'

function codePushInit() {
  return codePush(
    {
      checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
      installMode: codePush.InstallMode.ON_NEXT_RESUME
      // updateDialog: {
      //   appendReleaseDescription: true,

      //   descriptionPrefix: '\n\n更新内容:\n',
      //   mandatoryContinueButtonLabel: '继续',
      //   mandatoryUpdateMessage: '找到一个更新，需要立即安装',
      //   optionalIgnoreButtonLabel: '忽略',
      //   optionalInstallButtonLabel: '安装',
      //   optionalUpdateMessage: '找到一个更新，现在安装？',
      //   title: '有一个更新'
      // }
    },
    status => {
      alert(111)
      switch (status) {
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
          // Show "downloading" modal

          break
        case codePush.SyncStatus.INSTALLING_UPDATE:
          // Hide "downloading" modal

          break
        case codePush.SyncStatus.UPDATE_INSTALLED:
          break
      }
    },
    ({ receivedBytes, totalBytes }) => {
      /* Update download modal progress */
    }
  )
}

export default {
  codePushInit
}
