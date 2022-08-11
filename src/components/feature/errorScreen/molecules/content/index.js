import Text from "../../atom/Text";
import Button from "../../../../core/atom/Button";
import Text1 from "../../../../core/atom/Text";
import "../../../../core/style.css";
import "../../molecules/style.css";
export default function HeroSectionContent(){
    return(<>
     <Text1 text="WOOPS" textDesigin="mb-4 new-font"></Text1>
    <Text text="Oh, you must be lost,there is no such page." textDesigin="mb-5 bold-30-fam2"></Text>
    <Button btnDesign="bold-30-fam2 homebtn" text="Go to the home page"></Button>
    </>);
}