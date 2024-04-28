import { tech } from "@/constants";

const Techcard = ({ allowed }: { allowed: boolean }) => {
  return (
    <div className=" bg-teal-600 flex flex-col justify-center items-center">
      <div className=" text-xl p-5 ">
        {allowed ? <h1>Allowed Tech</h1> : <h1>Not Allowed Tech</h1>}
      </div>
      <div>
        {tech.map((item, index) => {
          if (item.allowed === allowed) {
            return (
              <div
                key={index}
                className=" bg-white p-2 m-2 flex justify-between items-center"
              >
                <p>{item.value}</p>
                <span>
                  {allowed ? <span>&#10004;</span> : <span>&#10060;</span>}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Techcard;
