import React from "react";
import { Input, Select, Checkbox } from "antd";
const { TextArea } = Input;

const Caregiverapplication = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className=" m-4 gap-5 flex flex-col ">
      <div>
        <h1 className=" font-bold text-2xl">Caregiver Application</h1>
        <p className=" text-[#6866669a]">Welcome to Gerocare</p>
      </div>
      <div className=" border border-solid flex flex-col gap-4 border-[#dbd8d8b6] ">
        <div className="m-4">
          <h3 className=" text-lg h-9 font-bold">ALL FIELDS ARE REQUIRED</h3>{" "}
          <hr />
        </div>

        <div className="m-4">
          <p className="font-bold ">Select a Beneficiary</p>
          <br />
          <Select
            defaultValue="CHOOSE A BENEFICIARY"
            style={{ width: 200, bordered: false }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
          <br />
          <br /> <hr /> <br />
        </div>
        <div className="m-4">
          <p className="font-bold ">
            Briefly describe the present health and living conditions of the
            client (who requires the care service)
          </p>
          <TextArea rows={4} />
          <br />
        </div>
        <div className="m-4">
          <p className="font-bold ">
            Please indicate any specific preference you may have(e.g for
            caregiver's language,gender, knowledge of local geography etc.. )
          </p>
          <TextArea rows={4} />
          <br />
        </div>
        <div className=" flex flex-col gap-4 m-4">
          <p className="font-bold ">
            WHICH OF THE FOLLOWING HOME CARE SERVICES ARE YOU SEEKING? (SERVICES
            TO BE PROVIDD BY THE CAREGIVER. PLEASE TICK ALL THAT APPLIES. )
          </p>
          <Checkbox onChange={onChange}>Meal Preparation</Checkbox>
          <Checkbox onChange={onChange}>Feeding</Checkbox>
          <Checkbox onChange={onChange}>Bathing and personal care</Checkbox>
          <Checkbox onChange={onChange}>
            Bedside care for minor temporary illness
          </Checkbox>
          <Checkbox onChange={onChange}>
            Medication Supervision and dispensing
          </Checkbox>
          <Checkbox onChange={onChange}>
            assistance with mobility and transfer
          </Checkbox>
          <Checkbox onChange={onChange}>Hospital escort</Checkbox>
          <Checkbox onChange={onChange}>Errand and Groceries</Checkbox>
          <Checkbox onChange={onChange}>Laundry</Checkbox>
          <Checkbox onChange={onChange}>Housekeeping</Checkbox>
          <Checkbox onChange={onChange}>
            Consultation, Assessment or Treatment by Medical Doctor
          </Checkbox>
          <Checkbox onChange={onChange}>
            Nursing services by a Physiotherapist or Rehabilitation Therapist
          </Checkbox>
          <Checkbox onChange={onChange}>
            Physiotherapy and medical rehabilitation by a Physiotherapist or
            Rehabilitation Therapist
          </Checkbox>
          <Checkbox onChange={onChange}>
            Maternity assistance to pregnant mother, new born baby or newborn
            mother
          </Checkbox>
          <Checkbox onChange={onChange}>Other</Checkbox>
        </div>

        <div className=" flex flex-col gap-4 m-4">
          <p className="font-bold ">
            PROPOSED CAREGIVERS WORK PATTERN (PLEASE TICK ALL THAT APPLIES.)
          </p>

          <Checkbox onChange={onChange}>
            LIve In- Full time(Caregiver lives with the Client on full time)
          </Checkbox>
          <Checkbox onChange={onChange}>
            Live In-(Caregiver sleeps over with client)
          </Checkbox>
          <Checkbox onChange={onChange}>
            Live In-Weekends(Caregiver lives with Client only on weekends)
          </Checkbox>
          <Checkbox onChange={onChange}>
            Live Out-Daily(Caregiver resumes every morning and closes in the
            evening)
          </Checkbox>
          <Checkbox onChange={onChange}>
            Ad hoc(Caregiver attends to Client whenever required)
          </Checkbox>
        </div>
        <div className="m-4">
          <p className="font-bold ">Others (Optional)</p>
          <TextArea />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Caregiverapplication;
