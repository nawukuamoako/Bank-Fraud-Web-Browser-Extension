# Bank Fraud Web Browser Extension

A browser extension designed to help users detect and avoid potential bank frauds while browsing online banking sites. It provides real-time alerts and warnings by monitoring unexpected changes in the browser window size, which can indicate potential scam or phishing attempts.

---

## Features

- Detects sudden and significant changes in browser window width (threshold set at 160 pixels).
- Automatically reloads the page and alerts the user when such suspicious activity is detected.
- Helps users become aware of potential scam attempts that manipulate browser dimensions to hide or spoof content.
- Lightweight and simple implementation for quick fraud detection.

---

## How It Works

The extension continuously monitors the width of the browser window. If the width changes suddenly beyond a threshold (160 pixels), it triggers:

- A page reload to reset the state.
- An alert warning the user with the message:  
  **"You are probably being SCAMMED right now."**

This behavior helps detect some common phishing or fraud tactics that manipulate browser size to deceive users.

---

## Installation

1. Clone or download this repository.

2. Open your browser’s extension page:

   - **Chrome:** Go to `chrome://extensions/`
   - **Firefox:** Go to `about:debugging#/runtime/this-firefox`

3. Enable **Developer Mode** (Chrome) or **Temporary Add-ons** (Firefox).

4. Click **Load unpacked** (Chrome) or **Load Temporary Add-on** (Firefox).

5. Select the folder where you downloaded the extension files.

6. The extension should now be installed and active in your browser toolbar.

---

## Usage

- When browsing your bank or financial websites, the extension runs silently in the background.
- If the browser window width suddenly changes by more than 160 pixels (possibly indicating scam activity), the page will reload and alert you immediately.
- This provides an early warning and helps prevent you from falling victim to window manipulation scams.

---

## Permissions

- `activeTab` – to access and monitor the current active tab's window size.
- `storage` – to save any user preferences (if implemented in future updates).

---

## Future Improvements

- Incorporate additional fraud detection methods beyond window size changes.
- Allow users to customize the threshold value.
- Enhance alerts with more detailed information and safer fallback options.
- Integrate machine learning for pattern recognition.

---

## Contact

Nathan Awuku Amoako  
Email: nathanjnr1@gmail.com  
GitHub: [nawukuamoako](https://github.com/nawukuamoako)  
