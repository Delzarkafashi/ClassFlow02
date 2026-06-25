const API_URL = "http://localhost:5214/api/classes";

export async function getClasses() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Kunde inte hämta utbildningar.");
    }

    return await response.json();
}

export async function createClass(newClass: any) {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newClass)
    });

    if (!response.ok) {
        throw new Error("Kunde inte skapa utbildning.");
    }

    return await response.json();
}

export async function deleteClass(id: string) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Kunde inte ta bort utbildningen.");
    }
}

export async function updateClass(id: string, updatedClass: any) {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedClass)
    });

    if (!response.ok) {
        throw new Error("Kunde inte uppdatera utbildningen.");
    }

    return await response.json();
}