import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                error: "Name, email, and message are required.",
            });
        }

        const { data, error } = await resend.emails.send({
            from: "Krishna Portfolio <onboarding@resend.dev>",
            to: ["krishna.d.ghodake@gmail.com"],
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            text: `
New message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(500).json({
                error: error.message || "Failed to send email.",
            });
        }

        return res.status(200).json({
            success: true,
            id: data?.id,
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return res.status(500).json({
            error: error.message || "Something went wrong.",
        });
    }
}