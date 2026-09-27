const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// ========================================
// NEXUS HOME API
// ========================================

app.get("/api", (req, res) => {

    res.json({
        success: true,
        project: "NEXUS",
        message: "Welcome to the NEXUS 3D Experience",
        version: "1.0.0"
    });

});


// ========================================
// FEATURES API
// ========================================

app.get("/api/features", (req, res) => {

    res.json({

        success: true,

        features: [
            {
                id: 1,
                title: "3D Motion",
                description:
                    "Interactive 3D objects create depth and movement."
            },

            {
                id: 2,
                title: "Glass UI",
                description:
                    "Glassmorphism interfaces with glowing gradients."
            },

            {
                id: 3,
                title: "Fluid Design",
                description:
                    "Responsive layouts and smooth transitions."
            }
        ]

    });

});


// ========================================
// EXPERIENCE API
// ========================================

app.get("/api/experience", (req, res) => {

    res.json({

        success: true,

        title: "IMAGINE MORE",

        description:
            "Move your mouse around the page and interact with the 3D environment."

    });

});


// ========================================
// CONTACT API
// ========================================

app.post("/api/contact", (req, res) => {

    const {
        name,
        email,
        message
    } = req.body;


    // Validation

    if (!name || !email || !message) {

        return res.status(400).json({

            success: false,

            message:
                "Name, email and message are required."

        });

    }


    console.log("================================");
    console.log("NEW NEXUS MESSAGE");
    console.log("================================");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    console.log("================================");


    res.json({

        success: true,

        message:
            "Your message has been received."

    });

});


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {

    console.log(
        `NEXUS backend running at http://localhost:${PORT}`
    );

});