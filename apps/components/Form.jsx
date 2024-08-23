import React, { useEffect } from "react"

const Form = (props) => {
    const {} = props
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://js.hsforms.net/forms/shell.js"
        document.body.appendChild(script)

        script.addEventListener("load", () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "21261306",
                    formId: "84c4c03a-f566-4a2d-b925-bd862cb2e053",
                    target: "#hubspotForm",
                })
            }
        })
    }, [])

    return (
        <div>
            <div className="bg-gradient-to-r bg-gradient-to-r from-transparent via-indigo-800 to-transparent dark:bg-slate-900 form-container">
                <div className="formtext">Sign up now for early access!</div>
                <br></br>
                <div id="hubspotForm" className="w-full"></div>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Form

