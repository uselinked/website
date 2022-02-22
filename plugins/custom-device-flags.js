export default function ({ $device }) {
  $device.isUbuntu = $device.userAgent.includes('Ubuntu')
  $device.isLinux = $device.userAgent.includes('Linux')
}
