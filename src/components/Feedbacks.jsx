import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { certificates } from "../constants";



const Feedbacks = () => {


  const tableRowStyle = {
    borderBottom: "1px solid #dddddd",

  };

  const tableCellStyle = {
    padding: "4%",

  };
  function visitLink(googleDriveLink) {
    window.open(googleDriveLink, "_blank");
  }
  const headerstyle={
    color:"#eeeeee",
    fontSize:"150%",
    marginRight:"5%",
  }


  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>CERTIFICATES</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20%" }}>
            <thead>
              <tr >
                <th style={headerstyle} >Certificate Name</th>
                <th style={headerstyle} >Issuing Organization</th>
                <th style={headerstyle}>Check Certificate</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((certificate, index) => (
                <tr key={index} style={tableRowStyle}>
                  <td className="columnTable" style={tableCellStyle}>{certificate.name}</td>
                  <td className="columnTable" style={tableCellStyle}>{certificate.certifProvider}</td>
                  <td style={tableCellStyle}>
                    <button onClick={() => visitLink(certificate.pdfName)}>
                      View PDF file
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
