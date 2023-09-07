import GroupInformation from "/src/AboutUs/GroupInformation";
import AppInformation from "/src/AboutUs/AppInformation";
import TitleBlock from "/src/AboutUs/Title";
import "/src/styles.scss";

export default function AboutUs() {
  return (
    <div>
      <br />
      <br />
      <br />
      <AppInformation />
      <br />
      <TitleBlock />
      <br />
      <GroupInformation />
    </div>
  );
}
