
export const WELCOME_EMAIL_TEMPLATE = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark" />
  <title>Welcome to notenesty</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: white;">Welcome to Lakenah!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px; color: #333;">
              <p>Hi ${name},</p>
              <p>We’re thrilled to have you on board! 🎉</p>
              <p>Lakenah is here to help you organize your notes, thoughts, and ideas in a clean and efficient way.</p>
              <p>Need help getting started? You can explore our <a href="https://notenesty.com/" style="color: #4CAF50;">Help Center</a>.</p>
              <p>Thanks again for joining us!</p>
              <p>— The Lakenah Team</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; background-color: #f0f0f0; text-align: center; font-size: 12px; color: #888;">
              <p style="margin: 4px 0;">Lakenah Inc. • 1234 Main Street • Your City, Country</p>
              <p style="margin: 4px 0;">This is an automated message, please do not reply.</p>
              <p style="margin: 4px 0;">
                <a href="https://notenesty.com/privacy-policy" style="color: #888; text-decoration: underline;">Privacy Policy</a> |
                <a href="https://notenesty.com/unsubscribe" style="color: #888; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;


export const PASSWORD_RESET_CONFIRMATION_TEMPLATE = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Password Reset Confirmation</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding:20px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); overflow:hidden;">
          <tr>
            <td style="background: linear-gradient(to right, #4caf50, #45a049); padding: 30px; text-align:center;">
              <h1 style="margin:0; color:#fff;">Password Reset Successful</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:30px; color:#333;">
              <p>Hi ${name},</p>
              <p>Your password has been reset successfully. If you did not request this change, please contact support immediately.</p>
              <p>Thanks,<br>The notenesty Team</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f0f0f0; padding:20px; font-size:12px; color:#888; text-align:center;">
              <p style="margin:4px 0;">Lakenah Inc. • 1234 Main Street • Your City, Country</p>
              <p style="margin:4px 0;">This is an automated message, please do not reply.</p>
              <p style="margin:4px 0;">
                <a href="https://notenesty.com/privacy-policy" style="color:#888; text-decoration:underline;">Privacy Policy</a> | 
                <a href="https://notenesty.com/unsubscribe" style="color:#888; text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;




export const VERIFICATION_EMAIL_TEMPLATE = (verificationCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding:20px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); overflow:hidden;">
          <tr>
            <td style="background: linear-gradient(to right, #4caf50, #45a049); padding: 30px; text-align:center;">
              <h1 style="margin:0; color:#fff;">Verify Your Email</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:30px; color:#333;">
              <p>Hello,</p>
              <p>Thank you for signing up! Use the following verification code to confirm your email address:</p>
              <p style="text-align:center; margin:30px 0;">
                <strong style="font-size:28px; letter-spacing:6px; color:#4caf50; background:#e8f5e9; padding:12px 25px; border-radius:6px; display:inline-block;">
                  ${verificationCode}
                </strong>
              </p>
              <p>This code will expire in 15 minutes.</p>
              <p>If you did not request this, you can safely ignore this email.</p>
              <p>Thanks,<br>The Lakenah Team</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f0f0f0; padding:20px; font-size:12px; color:#888; text-align:center;">
              <p style="margin:4px 0;">Lakenah Inc. • 1234 Main Street • Your City, Country</p>
              <p style="margin:4px 0;">This is an automated message, please do not reply.</p>
              <p style="margin:4px 0;">
                <a href="https://notenesty.com/privacy-policy" style="color:#888; text-decoration:underline;">Privacy Policy</a> | 
                <a href="https://notenesty.com/unsubscribe" style="color:#888; text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;






export const PASSWORD_RESET_CODE_TEMPLATE = (code) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset Code</title>
</head>
<body style="margin:0; padding:0; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding:20px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; box-shadow:0 2px 6px rgba(0,0,0,0.05); overflow:hidden;">
          <tr>
            <td style="background-color:#4caf50; padding:20px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:24px;">Password Reset Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px; color:#333333; font-size:16px; line-height:1.5;">
              <p>Hi there,</p>
              <p>We received a request to reset your password for your Notenesty account. Use the code below to reset your password:</p>
              <p style="text-align:center; margin:24px 0;">
                <strong style="font-size:22px; letter-spacing:4px; color:#4caf50;">${code}</strong>
              </p>
              <p>This code will expire in 15 minutes. If you didn’t request this, you can safely ignore this email.</p>
              <p>Need help? Just reply to this email or visit our <a href="https://notenesty.com/help" style="color:#4caf50;">Help Center</a>.</p>
              <p>Thanks,<br>The Notenesty Team</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f0f0f0; padding:16px; font-size:12px; color:#888888; text-align:center;">
              <p style="margin:4px 0;">Notenesty Inc. • 1234 Main Street • Your City, Country</p>
              <p style="margin:4px 0;">This is an automated message, please do not reply.</p>
              <p style="margin:4px 0;">
                <a href="https://notenesty.com/privacy-policy" style="color:#888; text-decoration:underline;">Privacy Policy</a> | 
                <a href="https://notenesty.com/unsubscribe" style="color:#888; text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
