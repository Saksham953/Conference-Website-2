import "./page.css"
import List from "@/components/List";

export default function AdvisoryCommittee() {
    return (
        <>
            <div className="container">
                <div className="body">
                    <div className="title_paper center">
                        Advisory Board
                    </div>
                    <div className="lists">
                    <ul>
                        <List
                            name='Dr Karmeshu, Professor'
                            detail="Department of Computer Science and Systems, JNU, India"
                        />
                        <List
                            name='Dr G. Sahoo, Professor'
                            detail="Department of Computer Science and Engineering, IIT-ISM Dhanbad, India"
                        />
                        <List
                            name='Dr. Mohamed Tawhid'
                            detail="Professor, Department of Mathematics and Statistics, Thompson Rivers University, Canada"
                        />
                        <List
                            name='Dr Tej Singh'
                            detail="Faculty of Informatics, Eotvos Lorand University, Szombathely, Hungary"
                        />
                        <List
                            name='Dr H. M. Gupta'
                            detail="Department of the Electrical Engineering, IIT, Delhi, India"
                        />
                        <List
                            name='Dr Kehar Singh'
                            detail="Professor, Department of APSH, IIT Delhi, India"
                        />
                        <List
                            name='Dr D K Yadav'
                            detail="Professor, Department of Computer Science and Engineering, National Institute of Technology Jamshedpur, Jharkhand, India"
                        />
                        <List
                            name='Dr Apurba Das'
                            detail="Head, Cognitive AI, Tata Consultancy Services, Bengaluru, Karnataka, India"
                        />

                        <List
                            name='Dr Ajay Dev Nehra'
                            detail="Director, Head of Service Delivery, Spirent Communications"
                        />
                        <List
                            name='Dr Kapil Sharma'
                            detail="Professor, Department of Information Technology, Delhi Technological University Delhi, India"
                        />
                        <List
                            name='Dr Pradeep Kumar Singh'
                            detail="Associate Professor, Department of Computer Science and Engineering, Central University, Jammu, India"
                        />
                        <List
                            name='Dr Sudeep Tanwar'
                            detail="Professor, Department of Computer Science and Engineering, Nirma University, Ahmadabad, Gujrat, India"
                        />
                        <List
                            name='Dr Srabjit Singh'
                            detail="Professor, Department of Computer Science and Engineering, UIET, Panjab University, Chandigarh"
                        />
                        <List
                            name='Dr Arpan Kumar Kar'
                            detail="Professor, Department of Management Studies and School of Artificial Intelligence, IIT, Delhi, India"
                        />
                        <List
                            name='Dr Gagangeet Aujla'
                            detail="Associate Professor, Associate Professor, Department of Computer Science, Durham University, Durham DH1 3LE, United Kingdom"
                        />
                        <List
                            name='Dr. Ming Dong'
                            detail="Professor, Department of Computer Science, Wayne State University, USA"
                        />
                    </ul>
                    </div>
                    

                </div>

            </div>


        </>
    )
}