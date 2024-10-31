"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const separator_1 = require("@/components/ui/separator");
const lucide_react_1 = require("lucide-react");
const rainbowColors = [
    "from-pink-500 to-red-500",
    "from-red-500 to-yellow-500",
    "from-yellow-500 to-green-500",
    "from-green-500 to-blue-500",
    "from-blue-500 to-indigo-500",
    "from-indigo-500 to-purple-500",
    "from-purple-500 to-pink-500",
];
const Lightning = () => (<svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,90 L50,10 L90,50 L50,90 Z" fill="none" stroke="yellow" strokeWidth="2" className="lightning"/>
  </svg>);
function Component() {
    const [currentColorIndex, setCurrentColorIndex] = (0, react_1.useState)(0);
    const [showLightning, setShowLightning] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % rainbowColors.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const handleLightningClick = () => {
        setShowLightning(true);
        setTimeout(() => setShowLightning(false), 1000);
    };
    return (<div className={`min-h-screen bg-gradient-to-r ${rainbowColors[currentColorIndex]} transition-colors duration-1000 ease-in-out`}>
      <header className="bg-black bg-opacity-50 text-white p-4 relative overflow-hidden">
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <framer_motion_1.motion.h1 className="text-3xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Junaid Ul Haque Sheikh
          </framer_motion_1.motion.h1>
          <nav className="flex gap-4">
            <button_1.Button variant="ghost" className="text-white hover:text-white/90">My Resume</button_1.Button>
            <button_1.Button variant="outline" className="text-white hover:text-white/90">Generate your</button_1.Button>
          </nav>
        </div>
        {showLightning && <Lightning />}
      </header>

      <main className="container mx-auto py-8 px-4">
        <framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <card_1.Card className="mb-8 bg-white bg-opacity-80 backdrop-blur-lg">
            <card_1.CardContent className="grid md:grid-cols-[200px_1fr] gap-6 p-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
                <img src="/placeholder.svg" alt="Profile" className="object-cover" width={160} height={160}/>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-purple-800">Junaid Ul Haque Sheikh</h2>
                <h3 className="text-xl text-pink-600 font-semibold mb-4">Web Developer</h3>
                <div className="grid gap-2 text-gray-700">
                  <p><span className="font-semibold text-indigo-600">Father's Name:</span> Abdul Haque Sheikh</p>
                  <p><span className="font-semibold text-indigo-600">Email:</span> junaidulhaquesheikg204@gmail.com / junaidulhaquesheikh582@gmail.com</p>
                  <p><span className="font-semibold text-indigo-600">Phone:</span> +923359033554 / +923343046525</p>
                </div>
              </div>
            </card_1.CardContent>
          </card_1.Card>
        </framer_motion_1.motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8">
          <framer_motion_1.motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <card_1.Card className="mb-6 bg-white bg-opacity-80 backdrop-blur-lg">
              <card_1.CardHeader>
                <h3 className="text-xl font-semibold text-green-600">Education</h3>
              </card_1.CardHeader>
              <card_1.CardContent className="grid gap-4">
                <div>
                  <h4 className="font-semibold text-orange-600">Bachelor of Arts (B.A)</h4>
                  <p className="text-gray-600">Shah Abdul Latif University, Kamber Ali Khan Larkana</p>
                  <p className="text-sm text-gray-500">Passed in 2016</p>
                </div>
                <separator_1.Separator />
                <div>
                  <h4 className="font-semibold text-orange-600">Intermediate</h4>
                  <p className="text-gray-600">Shah Abdul Latif University, Larkana Board</p>
                  <p className="text-sm text-gray-500">Passed in 2014</p>
                </div>
                <separator_1.Separator />
                <div>
                  <h4 className="font-semibold text-orange-600">Matriculation</h4>
                  <p className="text-gray-600">New Oxford Academy</p>
                  <p className="text-sm text-gray-500">Passed in 2008</p>
                </div>
              </card_1.CardContent>
            </card_1.Card>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <card_1.Card className="bg-white bg-opacity-80 backdrop-blur-lg">
              <card_1.CardHeader>
                <h3 className="text-xl font-semibold text-yellow-600">Skills & Certifications</h3>
              </card_1.CardHeader>
              <card_1.CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label_1.Label htmlFor="skillName">Skill Name</label_1.Label>
                    <input_1.Input id="skillName" placeholder="Enter your skill"/>
                  </div>
                  <div className="grid gap-2">
                    <label_1.Label htmlFor="certificationName">Certification Name</label_1.Label>
                    <input_1.Input id="certificationName" placeholder="Enter your certification"/>
                  </div>
                  <div className="grid gap-2">
                    <label_1.Label htmlFor="issuingOrganization">Issuing Organization</label_1.Label>
                    <input_1.Input id="issuingOrganization" placeholder="Enter the issuing organization"/>
                  </div>
                  <div className="grid gap-2">
                    <label_1.Label htmlFor="issueDate">Issue Date</label_1.Label>
                    <input_1.Input id="issueDate" type="date"/>
                  </div>
                  <button_1.Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Add Skill/Certification
                  </button_1.Button>
                </form>
              </card_1.CardContent>
            </card_1.Card>
          </framer_motion_1.motion.div>
        </div>

        <framer_motion_1.motion.div className="flex flex-col items-center gap-4 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <button_1.Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white w-48" onClick={handleLightningClick}>
            <lucide_react_1.FileText className="w-4 h-4 mr-2"/>
            Generate Resume
          </button_1.Button>
          <button_1.Button variant="outline" className="border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50 w-48">
            <lucide_react_1.Download className="w-4 h-4 mr-2"/>
            Download as PDF
          </button_1.Button>
          <button_1.Button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white w-48" onClick={handleLightningClick}>
            <lucide_react_1.Zap className="w-4 h-4 mr-2"/>
            Add Lightning Effect
          </button_1.Button>
        </framer_motion_1.motion.div>
      </main>

      <style jsx global>{`
        @keyframes lightning {
          0% { opacity: 0; }
          25% { opacity: 1; }
          50% { opacity: 0; }
          75% { opacity: 1; }
          100% { opacity: 0; }
        }
        .lightning {
          animation: lightning 1s linear;
        }
      `}</style>
    </div>);
}
