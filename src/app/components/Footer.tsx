export default function Footer(props: any) {
  return (
    <>
      <svg
        viewBox="0 0 1920 300"
        width="100%"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        preserveAspectRatio="xMidYMid slice"
        className="overflow-hidden"
      >
        <rect
          x="0"
          y="0"
          width="1920"
          height="300"
          fill={props.mode ? "rgb(2, 15, 31)" : "rgb(23, 95, 116)"}
        ></rect>
        <path
          id="stair1"
          d="M0 138L274 138L274 133L549 133L549 179L823 179L823 182L1097 182L1097 180L1371 180L1371 124L1646 124L1646 179L1920 179L1920 161L1920 301L1920 301L1646 301L1646 301L1371 301L1371 301L1097 301L1097 301L823 301L823 301L549 301L549 301L274 301L274 301L0 301Z"
          fill="#000000"
        ></path>
        <path
          id="stair2"
          d="M0 201L274 201L274 194L549 194L549 218L823 218L823 226L1097 226L1097 230L1371 230L1371 225L1646 225L1646 205L1920 205L1920 199L1920 301L1920 301L1646 301L1646 301L1371 301L1371 301L1097 301L1097 301L823 301L823 301L549 301L549 301L274 301L274 301L0 301Z"
          fill="#000000"
        ></path>
        <path
          id="stair3"
          d="M0 226L274 226L274 224L549 224L549 256L823 256L823 224L1097 224L1097 233L1371 233L1371 271L1646 271L1646 264L1920 264L1920 227L1920 301L1920 301L1646 301L1646 301L1371 301L1371 301L1097 301L1097 301L823 301L823 301L549 301L549 301L274 301L274 301L0 301Z"
          fill="#000000"
        ></path>
        <path
          id="stair4"
          d="M0 130L274 130L274 137L549 137L549 133L823 133L823 169L1097 169L1097 161L1371 161L1371 149L1646 149L1646 126L1920 126L1920 132L1920 301L1920 301L1646 301L1646 301L1371 301L1371 301L1097 301L1097 301L823 301L823 301L549 301L549 301L274 301L274 301L0 301Z"
          fill="#000000"
        ></path>
        <path
          id="stair5"
          d="M0 199L274 199L274 181L549 181L549 202L823 202L823 211L1097 211L1097 192L1371 192L1371 189L1646 189L1646 218L1920 218L1920 224L1920 301L1920 301L1646 301L1646 301L1371 301L1371 301L1097 301L1097 301L823 301L823 301L549 301L549 301L274 301L274 301L0 301Z"
          fill="#000000"
        ></path>
        <path
          id="stair6"
          d="M0 253L274 253L274 260L549 260L549 236L823 236L823 261L1097 261L1097 259L1371 259L1371 229L1646 229L1646 229L1920 229L1920 271L1920 301L1920 301L1646 301L1646 301L1371 301L1371 301L1097 301L1097 301L823 301L823 301L549 301L549 301L274 301L274 301L0 301Z"
          fill="#000000"
        ></path>
      </svg>

      <div className="flex justify-center items-center cursor-default h-20 gap-10 bg-[#000000]">
        <h2 className="text-white">
          Devoloped and Designed by{" "}
          <a href="" target="_blank" title="hey :p">
            @SirRango!
          </a>
        </h2>
      </div>
    </>
  );
}
