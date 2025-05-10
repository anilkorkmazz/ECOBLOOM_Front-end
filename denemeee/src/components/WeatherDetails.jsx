import { useState } from "react";
import backgroundImage from "../assets/Weather.png";

import { FaSearch, FaArrowLeft } from "react-icons/fa"; // 📌 Geri ikonu eklendi




// 📌 TEST AMAÇLI ÖRNEK BİTKİ VERİLERİ (Sıcaklık → Bitkiler)
const testPlantData = {
    "15-20": [
        { name: "Fern 🌿", growTime: "6-8 ay", tempRange: "15° - 20°" },
        { name: "Moss 🌱", growTime: "3-5 ay", tempRange: "14° - 18°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" }

    ],
    "10-15": [
        { name: "Cactus 🌵", growTime: "12-18 ay", tempRange: "10° - 15°" },
        { name: "Succulent 🌵", growTime: "8-10 ay", tempRange: "10° - 14°" },
        { name: "Aloe Vera 🍃", growTime: "6-9 ay", tempRange: "12° - 16°" }
    ],
    "20-25": [
        { name: "Bamboo 🎍", growTime: "12-24 ay", tempRange: "20° - 25°" },
        { name: "Banana Plant 🍌", growTime: "10-12 ay", tempRange: "22° - 27°" },
        { name: "Fiddle Leaf Fig 🌳", growTime: "18-24 ay", tempRange: "20° - 25°" }
    ]
};

export default function WeatherDetails() {
    //const [humidity, setHumidity] = useState("");
    const [temp, setTemp] = useState("");
    const [plantNames, setPlantNames] = useState([]);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setError("");

        // 📌 Kullanıcının girdiği sıcaklık ve nem değerini belirli bir formata çeviriyoruz
        const key = `${temp}`;

        // 📌 TEST AMAÇLI VERİLERİ KULLANIYORUZ
        const plants = testPlantData[key] || [];
        setPlantNames(plants);

        if (plants.length === 0) {
            setError("⚠️ Uygun bitki bulunamadı.");
        }


        // // 📌 GERÇEK API BAĞLANTISI (Şimdilik devre dışı)
        // try {
        //     const response = await axios.get(`http://localhost:5000/api/plants?temp=${temp}`);
        //     setPlantNames(response.data.plantNames || []);
        // } catch (error) {
        //     console.error("Error fetching plant data:", error);
        //     setPlantNames([]);
        //     setError("⚠️ No plant data available!");
        // }
    };



    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            {/* 🔙 Geri Butonu */}
            <button
                onClick={() => window.history.back()}
                className="absolute top-6 left-6 flex items-center gap-2 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100 transition"
            >
                <FaArrowLeft className="text-green-700" size={20} />
                <span className="text-green-700 font-semibold">Geri</span>
            </button>



            {/* Sayfa Başlığı */}
            <h1 className="text-4xl font-semibold text-white mb-8">Sıcaklığa Göre Bitki Önerisi</h1>

            {/* Arama ve Parametre Girişi */}
            <div className="relative flex flex-col items-center gap-4">
                {/* Arama Kutusu */}
                <div className="flex items-center bg-white bg-opacity-90 p-3 px-6 rounded-full shadow-lg">
                    <p className="text-black font-semibold">Sıcaklık Değeri Giriniz</p>
                    <FaSearch size={20} className="text-gray-600 ml-4 cursor-pointer" onClick={handleSearch} />
                </div>

                {/* Parametre Girişleri */}
                <div className="flex gap-4">

                    {/* Sıcaklık Girişi */}
                    <div className="flex items-center bg-white bg-opacity-90 p-3 px-5 rounded-full shadow-lg">
                        <p className="text-black font-semibold">Sıcaklık</p>
                        <input
                            type="text"
                            placeholder="15° - 20°"
                            className="bg-transparent outline-none text-black text-lg ml-3 w-24"
                            value={temp}
                            onChange={(e) => setTemp(e.target.value)}
                        />
                    </div>

                    {/* Nem Girişi */}
                    {/*
                    <div className="flex items-center bg-white bg-opacity-90 p-3 px-5 rounded-full shadow-lg">
                        <p className="text-black font-semibold">Hum</p>
                        <input
                            type="text"
                            placeholder="60% - 80%"
                            className="bg-transparent outline-none text-black text-lg ml-3 w-20"
                            value={humidity}
                            onChange={(e) => setHumidity(e.target.value)}
                        />
                    </div>
                    */}

                </div>
            </div>




            {/*/!* Hava Durumu Kartı *!/*/}

            {/*<div className="absolute right-10 bottom-10 bg-white bg-opacity-90 rounded-3xl shadow-lg w-64 p-6">*/}
            {/*    /!* Hava İkonu ve Sıcaklık *!/*/}
            {/*    <div className="flex items-center justify-between">*/}
            {/*        <div className="text-green-700">*/}
            {/*            <p className="text-5xl font-bold">16°</p>*/}
            {/*            <p className="text-sm font-semibold">Wednesday</p>*/}
            {/*            <p className="text-sm">January 1st, 2025</p>*/}
            {/*        </div>*/}
            {/*        <div className="text-green-700 text-4xl">🌧️</div>*/}
            {/*    </div>*/}

            {/*    /!* Hava Durumu Açıklaması *!/*/}
            {/*    <p className="text-center text-lg font-semibold text-green-800 mt-3">Rainy</p>*/}

            {/*    /!* Hava Tahmini Butonu *!/*/}
            {/*    <button className="w-full mt-4 bg-green-700 text-white py-2 rounded-full shadow-lg hover:bg-green-800">*/}
            {/*        Weather Forecast*/}
            {/*    </button>*/}
            {/*</div>*/}




            {/* 📌 Bitki Bilgileri */}
            {plantNames.length > 0 && (
                <div className="mt-12 max-w-5xl w-full overflow-x-auto px-6">
                    <div className="flex gap-8">
                        {plantNames.map((plant, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-80 backdrop-blur-md p-6 min-w-[250px] rounded-xl shadow-md text-black flex-shrink-0"
                            >
                                <h3 className="text-xl font-bold mb-2 text-green-700">{plant.name}</h3>
                                <p className="text-gray-700"><span className="font-semibold">Yetişme Süresi:</span> {plant.growTime}</p>
                                <p className="text-gray-700"><span className="font-semibold">Sıcaklık Aralığı:</span> {plant.tempRange}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}




            {/* 📌 Eğer hata varsa göster */}
            {error && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-96">
                    {error}
                </div>
            )}
        </div>
    );
}
