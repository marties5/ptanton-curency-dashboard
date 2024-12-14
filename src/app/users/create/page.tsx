"use client";

import * as React from "react";

const Page = () => {
  const [formData, setFormData] = React.useState({
    short_name: "",
    long_name: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
    image_url: "",
  });

  const handleSubmitForm = async () => {
    console.log(formData);
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("succes");
      setFormData({
        short_name: "",
        long_name: "",
        username: "",
        email: "",
        password: "",
        phone_number: "",
        image_url: "",
      });
    } else {
      alert("gagal");
    }
  };

  return (
    <div>
      <form onSubmit={() => handleSubmitForm}>
        <input
          type="text"
          placeholder="Name"
          value={formData.short_name}
          onChange={(e) =>
            setFormData({ ...formData, short_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="long name"
          value={formData.long_name}
          onChange={(e) =>
            setFormData({ ...formData, long_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default Page;
