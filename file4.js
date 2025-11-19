"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        let html = "<form id='customForm'>";

        this.fields.forEach(f => {
            html += `
                <label>${f.label}</label>
                <input type="${f.type}" name="${f.label}" /><br><br>
            `;
        });

        html += `<button type="button" onclick="getFormData()">Submit</button></form>`;
        container.innerHTML = html;
    }
}

function getFormData() {
    const inputs = document.querySelectorAll("#customForm input");
    let data = {};

    inputs.forEach(i => {
        data[i.name] = i.value;
    });

    console.log("Form Data:", data);
}

// Example:
const fb = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);
