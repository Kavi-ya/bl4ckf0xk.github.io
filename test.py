import PyPDF2
for fn in ["THM-LXNPIOPQCS.pdf", "Certificate-bl4ckf0xk.pdf", "Kavindu_Sahan.pdf", "certificate.pdf"]:
    try:
        reader = PyPDF2.PdfReader(f"/Users/bl4ckf0xk/Documents/Projects/bl4ckf0xk.github.io/public/certificates/{fn}")
        text = reader.pages[0].extract_text()
        print(f"--- {fn} ---")
        print(text[:200].replace('\n', ' '))
    except Exception as e:
        print(f"Failed {fn}")
