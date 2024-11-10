package dev.radio_life.controller;

import dev.radio_life.model.AudioFile;
import dev.radio_life.service.RadioService;
import dev.radio_life.storage.FileSystemStorageService;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/radiolife")
@CrossOrigin(origins = "*")
public class AudioController {

    FileSystemStorageService fileService;

    RadioService radioService;

    public AudioController(FileSystemStorageService fileService,
                           RadioService radioService) {
        this.fileService = fileService;
        this.radioService = radioService;
    }

    @GetMapping
    public ResponseEntity<List<AudioFile>> findAll() {
        return ResponseEntity.ok(radioService.findAll());
    }
@GetMapping("/files/{filename}")
    public ResponseEntity<Resource> findByName(@PathVariable String filename) {
        return ResponseEntity.ok( radioService.getFileByName(filename));
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> addFile(@RequestParam("file") MultipartFile file,
                                                       RedirectAttributes redirectAttributes) {
        fileService.store(file);
        Path path = fileService.load(file.getOriginalFilename());
        System.out.println("current path in controller" + path);
        radioService.store(file, path);
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");

        Map<String, String> response = new HashMap<>();
        response.put("message", "You successfully uploaded " + file.getOriginalFilename() + "!");

        return ResponseEntity.ok(response);
    }


}
