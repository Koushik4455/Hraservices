function doPost(e) {
    var sheet = SpreadsheetApp.openById("AKfycbyqTDT5Y-o59fytRF9zc4HBMwUhKWTw7KpbC8SCgTX42B7NjyXGhEMc8UWKyODk4xcbsg").getActiveSheet();
    var newRow = [e.parameter.name, e.parameter.email, e.parameter.message];
    sheet.appendRow(newRow);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  