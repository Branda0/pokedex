import professorOakImg from "../assets/img/professorOak.png";
const ProfessorOakMsg = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center px-4">
      <img className="w-32 mb-4 " src={professorOakImg} alt="professor Oak" />
      <p
        className="border-4 border-double border-gray-600
        px-3 py-2 rounded-lg font-code max-w-md "
      >
        {message}
      </p>
    </div>
  );
};
export default ProfessorOakMsg;
