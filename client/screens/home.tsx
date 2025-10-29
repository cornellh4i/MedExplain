import { Search }  from "lucide-react-native";
import { View , Text}  from "react-native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState } from "react";
import { Pill, Heart, ShieldAlert} from "lucide-react-native"; 


export default function Home() { 
    const [input, setInput] = useState("");

    return( 
        <View className="flex-1 bg-white items-center justify-center mt-20">
            <Text>This is a testing page.</Text>
            {/* Add New Components here */}
            <SearchBar
                className="mt-4 w-full"
                placeholder="searching.."
                value={input}
                onChangeText={(text) => setInput(text)}
            />
            <View className="flex flex-col gap-[12px">
            <Card
                icon={Heart}
                color="#433592"
                label="Symptom"
                description="Examples: high blood pressure, sneezing, nosebleeds, coughing, headache, sore throat, stomach pain"
                className="w-[90%] mt-8 mb-8"
            />
            <Card
                icon={Pill}
                color="#C145AB"
                label="Medicine"
                description="Examples: Acetaminophen, Ibuprofen, Aspirin, Lisinopril, Simvastatin, Levothyroxine, Amoxicillin, Albuterol."
                className="w-[90%] mt-8 mb-8"
            />
            <Card
                icon={ShieldAlert}
                color="#67A342"
                label="Ilness"
                description="Examples: common cold, Influenza, allergies, gastroenteritis, diabetes, cancer, multiple sclerosis, HIV/AIDS"
                className="w-[90%] mt-8 mb-8"
            />
            <Button
                label="Test Button"
                onPress={() => console.log("✅", "The button was pressed!")}
            />
            </View>
        </View>
    )
}