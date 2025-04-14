import type { Patient } from "../types/Patient";

export async function fetchPatients(): Promise<Patient[]> {
  try {
    // Fetch data from Strapi
    const response = await fetch("http://127.0.0.1:1337/api/patients?populate=*");
    if (!response.ok) {
      throw new Error(`Failed to fetch patients: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    // Check if the response contains the expected data structure
    if (!data || !data.data) {
      throw new Error("Invalid API response: Missing 'data' field");
    }

    // Map and normalize the data
    return data.data.map((patient: any) => ({
      id: patient.id,
      name: patient.name,
      age: patient.age,
      gender: patient.gender,
      occupation: patient.occupation,
      diagnosis: patient.diagnosis,
      weight: patient.weight,
      height: patient.height,
      bmi: patient.bmi,
      estimated_energy_intake: patient.estimated_energy_intake,
      biochemical_data: patient.biochemical_data,
      physical_activity: patient.physical_activity,
      motivation_importance: patient.motivation_importance,
      motivation_confidence: patient.motivation_confidence,
      motivation_readiness: patient.motivation_readiness,
      birthday: patient.birthday,
      risk: patient.risk,
      visits: patient.visits,
      isNew: patient.isNew,
      profileImage:
        patient.profileImage?.length > 0
          ? `http://127.0.0.1:1337${patient.profileImage[0].url}`
          : "/default-profile.png", // Fallback to a default profile image
    }));
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
}
