/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import certificateBg from "/TrainingCertificateNew.png";
import "../styles/NewCertificate.css";

const formatDateRange = (fromDate, toDate) => {
  const from = new Date(fromDate);
  const to = new Date(toDate);

  const fromDay = from.getDate();
  const toDay = to.getDate();
  const fromMonth = from.toLocaleString("en-US", { month: "long" });
  const toMonth = to.toLocaleString("en-US", { month: "long" });
  const year = from.getFullYear();

  const addSuffix = (day) => {
    if (day % 10 === 1 && day !== 11) return `${day}st`;
    if (day % 10 === 2 && day !== 12) return `${day}nd`;
    if (day % 10 === 3 && day !== 13) return `${day}rd`;
    return `${day}th`;
  };

  return `Date-${addSuffix(fromDay)} ${fromMonth} to ${addSuffix(
    toDay
  )} ${toMonth}, ${year}`;
};

const NewCertificate = React.forwardRef(({ certificateData }, ref) => {
  useEffect(() => {
    console.log(
      "NewCertificate mounted/updated, certificateData:",
      certificateData
    );
    console.log("NewCertificate ref:", ref?.current);
  }, [certificateData, ref]);

  if (!certificateData) {
    console.log("NewCertificate: certificateData is null or undefined");
    return null;
  }

  return (
    <div ref={ref} className="certificate-container p-3 bg-light">
      <div
        className="certificate-inner position-relative w-100 h-100 bg-cover bg-center shadow"
        style={{
          backgroundImage: `url(${certificateBg})`,
          aspectRatio: "297/210"
        }}
      >
        {/* Serial Number */}
        <div className="serial-number position-absolute">
          {certificateData.regNo}
        </div>

        {/* Certificate Type */}
        <div className="certificate-type position-absolute text-center">
          <div className="certificate-type-bg rounded-pill">
            <div className="certificate-type-text text-white text-uppercase text-center">
              {certificateData.projectName}
            </div>
          </div>
        </div>

        {/* Student Name */}
        <div className="student-name position-absolute text-center">
          <span>{certificateData.studentName}</span>
        </div>

        {/* Description */}
        <div className="description position-absolute text-center">
          Info Era Software Services proudly awards this certificate for the
          completion of {certificateData.projectName} Training on{" "}
          {certificateData.trainingTopic}, from{" "}
          {formatDateRange(certificateData.fromDate, certificateData.toDate)}.
          We congratulate you for your outstanding Performance in this training
          program.
        </div>

        {/* QR Code Section */}
        <div className="qr-code position-absolute text-center">
          {certificateData.qrCode ? (
            <div>
              <img
                src={certificateData.qrCode}
                alt="QR Code"
                className="qr-code-img rounded"
              />
              <div className="qr-code-footer bg-dark">
                <p className="qr-code-text text-white">
                  Info Era Software Services Pvt Ltd.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-muted small">QR Code not available</p>
          )}
        </div>

        {/* Director Signature */}
        <div className="signature position-absolute">
          <div className="signature-text">
            <p className="font-weight-bold">Rahul Raj</p>
          </div>
        </div>
      </div>
    </div>
  );
});

NewCertificate.displayName = "NewCertificate";

export default NewCertificate;

// old code
// /* eslint-disable react/prop-types */
// import React, { useEffect } from "react";
// import certificateBg from "/TrainingCertificateNew.png";
// import "../styles/NewCertificate.css";

// const formatDateRange = (fromDate, toDate) => {
//   const from = new Date(fromDate);
//   const to = new Date(toDate);

//   const fromDay = from.getDate();
//   const toDay = to.getDate();
//   const fromMonth = from.toLocaleString("en-US", { month: "long" });
//   const toMonth = to.toLocaleString("en-US", { month: "long" });
//   const year = from.getFullYear();

//   const addSuffix = (day) => {
//     if (day % 10 === 1 && day !== 11) return `${day}st`;
//     if (day % 10 === 2 && day !== 12) return `${day}nd`;
//     if (day % 10 === 3 && day !== 13) return `${day}rd`;
//     return `${day}th`;
//   };

//   return `Date-${addSuffix(fromDay)} ${fromMonth} to ${addSuffix(
//     toDay
//   )} ${toMonth}, ${year}`;
// };

// const NewCertificate = React.forwardRef(({ certificateData }, ref) => {
//   useEffect(() => {
//     console.log("NewCertificate mounted, certificateData:", certificateData);
//     console.log("NewCertificate ref:", ref?.current);
//   }, [certificateData, ref]);

//   if (!certificateData) {
//     console.log("NewCertificate: certificateData is null or undefined");
//     return null;
//   }

//   return (
//     <div>
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
//           @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

//           @media print {
//             .certificate-container {
//               width: 297mm !important;
//               height: 210mm !important;
//               margin: 0 !important;
//               padding: 0 !important;
//             }

//             .certificate-inner {
//               width: 100% !important;
//               height: 100% !important;
//               margin: 0 !important;
//               padding: 0 !important;
//             }

//             @page {
//               size: A4 landscape;
//               margin: 0;
//             }
//           }

//           /* Responsive Adjustments */
//           @media screen and (max-width: 768px) {
//             .certificate-inner {
//               min-height: 300px !important;
//             }
//             .serial-number {
//               font-size: 0.875rem !important;
//               top: 2% !important;
//               right: 5% !important;
//             }
//             .certificate-type {
//               top: 25% !important;
//             }
//             .certificate-type div {
//               padding: 0.5rem 1.5rem !important;
//             }
//             .certificate-type-text {
//               font-size: 1.25rem !important;
//             }
//             .student-name {
//               top: 45% !important;
//               font-size: 1.5rem !important;
//             }
//             .description {
//               top: 55% !important;
//               width: 90% !important;
//               font-size: 0.875rem !important;
//               line-height: 1.25rem !important;
//             }
//             .qr-code {
//               bottom: 5% !important;
//               width: 80px !important;
//               height: 80px !important;
//             }
//             .qr-code img {
//               width: 80px !important;
//               height: 80px !important;
//             }
//             .qr-code-text {
//               font-size: 0.5rem !important;
//             }
//             .signature {
//               bottom: 5% !important;
//               left: 5% !important;
//               font-size: 0.875rem !important;
//             }
//           }

//           @media screen and (max-width: 480px) {
//             .certificate-inner {
//               min-height: 200px !important;
//             }
//             .serial-number {
//               font-size: 0.75rem !important;
//               top: 1% !important;
//               right: 3% !important;
//             }
//             .certificate-type {
//               top: 20% !important;
//             }
//             .certificate-type div {
//               padding: 0.3rem 1rem !important;
//             }
//             .certificate-type-text {
//               font-size: 1rem !important;
//             }
//             .student-name {
//               top: 40% !important;
//               font-size: 1.25rem !important;
//             }
//             .description {
//               top: 50% !important;
//               width: 95% !important;
//               font-size: 0.75rem !important;
//               line-height: 1rem !important;
//             }
//             .qr-code {
//               bottom: 3% !important;
//               width: 60px !important;
//               height: 60px !important;
//             }
//             .qr-code img {
//               width: 60px !important;
//               height: 60px !important;
//             }
//             .qr-code-text {
//               font-size: 0.4rem !important;
//             }
//             .signature {
//               bottom: 3% !important;
//               left: 3% !important;
//               font-size: 0.75rem !important;
//             }
//           }
//         `}
//       </style>

//       <div
//         ref={ref}
//         className="p-4 bg-gray-100 certificate-container"
//         style={{
//           width: "100%",
//           maxWidth: "1200px",
//           margin: "0 auto"
//         }}
//       >
//         <div
//           className="relative w-full h-full bg-center bg-cover shadow-lg certificate-inner"
//           style={{
//             backgroundImage: `url(${certificateBg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//             aspectRatio: "297/210",
//             minHeight: "500px"
//           }}
//         >
//           {/* Serial Number */}
//           <div
//             className="absolute text-lg font-bold text-black top-8 right-[85px] serial-number"
//             style={{ fontFamily: "'Noto Sans', sans-serif" }}
//           >
//             {certificateData.regNo}
//           </div>

//           {/* Certificate Type */}
//           <div className="absolute left-1/2 top-[230px] transform -translate-x-1/2 certificate-type">
//             <div
//               className="px-8 py-4 rounded-full"
//               style={{ backgroundColor: "#022755" }}
//             >
//               <div
//                 className="text-3xl font-medium tracking-wider text-center text-white uppercase text-nowrap certificate-type-text"
//                 style={{ fontFamily: "'Noto Sans', sans-serif" }}
//               >
//                 {certificateData.projectName}
//               </div>
//             </div>
//           </div>

//           {/* Student Name */}
//           <div
//             className="absolute left-1/2 top-[350px] transform -translate-x-1/2 text-4xl font-normal border-b-4 my-2 student-name"
//             style={{
//               color: "#022755",
//               borderColor: "#022755",
//               fontFamily: "'Dancing Script', cursive"
//             }}
//           >
//             <span>{certificateData.studentName}</span>
//           </div>

//           {/* Description */}
//           <div
//             className="absolute mt-2 left-1/2 top-[400px] transform -translate-x-1/2 w-3/4 text-center text-lg font-bold leading-relaxed text-blue-950 description"
//             style={{ fontFamily: "'Noto Sans', sans-serif" }}
//           >
//             Info Era Software Services proudly awards this certificate for the
//             completion of {certificateData.projectName} Training on{" "}
//             {certificateData.trainingTopic}, from{" "}
//             {formatDateRange(certificateData.fromDate, certificateData.toDate)}.
//             We congratulate you for your outstanding Performance in this
//             training program.
//           </div>

//           {/* QR Code Section */}
//           <div className="absolute flex items-center justify-center border-4 border-black rounded bottom-20 left-1/2 qr-code">
//             {certificateData.qrCode ? (
//               <div>
//                 <img
//                   src={certificateData.qrCode}
//                   alt="QR Code"
//                   className="w-24 h-24"
//                   style={{ borderRadius: "8px" }}
//                 />
//                 <div className="p-1 bg-black">
//                   <p className="text-[6px] mt-2 text-white qr-code-text">
//                     Info Era Software Services Pvt Ltd.
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-sm text-gray-500">QR Code not available</p>
//             )}
//           </div>

//           {/* Director Signature */}
//           <div
//             className="absolute text-base text-blue-900 bottom-20 left-20 signature"
//             style={{ fontFamily: "'Noto Sans', sans-serif" }}
//           >
//             <div className="w-32">
//               <p className="font-semibold">Rahul Raj</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// NewCertificate.displayName = "NewCertificate";

// export default NewCertificate;
