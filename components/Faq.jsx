function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What types of makeup services do you offer?",
      answer:
        "We offer a wide range of services, including bridal makeup, party makeup, editorial makeup, and special effects (SFX) makeup. We also provide makeup lessons and consultations tailored to your unique style and needs.",
    },
    {
      id: 2,
      question: "What types of makeup services do you offer?",
      answer:
        "We offer a wide range of services, including bridal makeup, party makeup, editorial makeup, and special effects (SFX) makeup. We also provide makeup lessons and consultations tailored to your unique style and needs.",
    },
    {
      id: 3,
      question: "What types of makeup services do you offer?",
      answer:
        "We offer a wide range of services, including bridal makeup, party makeup, editorial makeup, and special effects (SFX) makeup. We also provide makeup lessons and consultations tailored to your unique style and needs.",
    },
    {
      id: 4,
      question: "What types of makeup services do you offer?",
      answer:
        "We offer a wide range of services, including bridal makeup, party makeup, editorial makeup, and special effects (SFX) makeup. We also provide makeup lessons and consultations tailored to your unique style and needs.",
    },
    {
      id: 5,
      question: "What types of makeup services do you offer?",
      answer:
        "We offer a wide range of services, including bridal makeup, party makeup, editorial makeup, and special effects (SFX) makeup. We also provide makeup lessons and consultations tailored to your unique style and needs.",
    },
  ];

  return (
    <section className="bg-[#E9ECEF]">
      <div className="max-w-2xl mx-auto p-6 ">
        <h2 className="text-lg font-bold mb-4">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <p className="font-semibold">
                {faq.id}. {faq.question}
              </p>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
