import Capacitor
import Foundation

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DetectScreenCapturePlugin)
public class DetectScreenCapturePlugin: CAPPlugin {
    override public func load() {
        super.load()

        NotificationCenter.default.addObserver(
            self,
            selector: #selector(didScreenRecording(_:)),
            name: UIScreen.capturedDidChangeNotification,
            object: nil
        )

        NotificationCenter.default.addObserver(
            self,
            selector: #selector(didScreenshot(_:)),
            name: UIApplication.userDidTakeScreenshotNotification,
            object: nil
        )
    }

    @objc private func didScreenshot(_: Notification) {
        notifyListeners("didScreenshot", data: [:], retainUntilConsumed: true)
    }

    @objc private func didScreenRecording(_: Notification) {
        if UIScreen.main.isCaptured {
            notifyListeners("didScreenRecording", data: [:], retainUntilConsumed: true)
        }
    }
}
