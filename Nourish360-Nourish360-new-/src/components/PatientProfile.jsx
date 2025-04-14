import { createSignal } from 'solid-js';

// Create reactive signals for patient data
const [patient, setPatient] = createSignal({
  name: "Jerry Spray",
  age: 21,
  gender: "Male",
  occupation: "Information Technology Consultant",
  caloricIntake: 3200,
  bloodType: "A+",
  imageSrc: "/images/default-patient.jpg", // Default image placeholder
});

// Handle image upload
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setPatient((prev) => ({ ...prev, imageSrc: imageUrl }));
  }
};

// Handle update button click
const handleUpdate = () => {
  // No need to update displayedPatient, since patient() is already reactive
  console.log('Patient info updated:', patient());
};

export default function PatientProfile() {
  return (
    <div class="bg-yellow-200 shadow-md p-3 rounded-lg max-w-xs mx-24 mt-10">
      <div class="flex flex-col items-center mb-4">
        <img src={patient().imageSrc} alt="Patient Image" class="w-14 h-14 rounded-full object-cover mb-3" />
        <input type="file" onchange={handleImageUpload} class="text-xs mt-1" />
      </div>

      <div class="flex flex-col gap-1">
        <div>
          <label class="block font-bold mb-1 text-xs">Name</label>
          <input 
            type="text" 
            value={patient().name} 
            onInput={(e) => setPatient((prev) => ({ ...prev, name: e.target.value }))} 
            class="border p-1 w-full rounded text-xs"
          />
        </div>

        <div>
          <label class="block font-bold mb-1 text-xs">Age</label>
          <input 
            type="number" 
            value={patient().age} 
            onInput={(e) => setPatient((prev) => ({ ...prev, age: parseInt(e.target.value) }))} 
            class="border p-1 w-full rounded text-xs"
          />
        </div>

        <div>
          <label class="block font-bold mb-1 text-xs">Gender</label>
          <select 
            value={patient().gender} 
            onInput={(e) => setPatient((prev) => ({ ...prev, gender: e.target.value }))} 
            class="border p-1 w-full rounded text-xs"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label class="block font-bold mb-1 text-xs">Occupation</label>
          <input 
            type="text" 
            value={patient().occupation} 
            onInput={(e) => setPatient((prev) => ({ ...prev, occupation: e.target.value }))} 
            class="border p-1 w-full rounded text-xs"
          />
        </div>

        <div>
          <label class="block font-bold mb-1 text-xs">Estimated Daily Caloric Intake (kcal)</label>
          <input 
            type="number" 
            value={patient().caloricIntake} 
            onInput={(e) => setPatient((prev) => ({ ...prev, caloricIntake: parseInt(e.target.value) }))} 
            class="border p-1 w-full rounded text-xs"
          />
        </div>
      </div>

      <div class="mt-3 p-2 bg-gray-100 rounded-lg">
        <h3 class="text-xs font-semibold">Patient Info:</h3>
        <p class="text-xs"><strong>Name:</strong> {patient().name}</p>
        <p class="text-xs"><strong>Age:</strong> {patient().age} years</p>
        <p class="text-xs"><strong>Gender:</strong> {patient().gender}</p>
        <p class="text-xs"><strong>Occupation:</strong> {patient().occupation}</p>
        <p class="text-xs"><strong>Caloric Intake:</strong> {patient().caloricIntake} kcal/day</p>
        <p class="text-xs"><strong>Blood Type:</strong> {patient().bloodType}</p>
      </div>

      <div class="mt-3 text-center">
        <button onClick={handleUpdate} class="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
          Update
        </button>
      </div>
    </div>
  );
}
